import { getUser } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = (id: string) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
    });
};
