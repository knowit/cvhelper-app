import axios from "axios";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryError } from "./axios";

export type GenerateCVResponse = { result: string }
export type GenerateCVParameters = { email?: string, query: string }
export const useGenerateCV = () => {
    // const queryClient = useQueryClient();

    return useMutation<GenerateCVResponse, QueryError, GenerateCVParameters>({
        mutationKey: ["cv", "generate"],
        mutationFn: (params) => axios.post("/api/cv/generate", params).then(({ data }) => data),
    })
} 