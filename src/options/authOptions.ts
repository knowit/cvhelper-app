import { AuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";


export const authOptions: AuthOptions = {
    providers: [
      AzureADProvider({
        id: "microsoft",
        clientId: process.env.AZURE_AD_CLIENT_ID as string,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
        tenantId: process.env.AZURE_AD_TENANT_ID,
  
        checks: ["pkce", "state"],
        authorization: {
          params: {
            scope: "User.Read openid profile email offline_access",
            access_type: 'offline',
            prompt: 'select_account',
          },
        },
      }),
    ],
    session: {
      strategy: "jwt"
    }
  }
  