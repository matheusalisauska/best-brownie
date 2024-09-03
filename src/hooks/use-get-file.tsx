import { getFile } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export const useGetFile = (fileKey: string) => {
    return useQuery({
        queryKey: ['fileKey', fileKey],
        queryFn: () => getFile(fileKey),
    });
};
