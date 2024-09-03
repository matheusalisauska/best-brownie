export type Prize = {
    id: string;
    title: string;
    fileKey: string;
    description: string;
    startDate: string;
    endDate: string;
    price: number;
    code: string;
    active: boolean;
    companyId: string;
    createdAt: string;
    updatedAt: string;
};

export type User = {
    user:{
        id: string;
        name:  string;
        email:  string;
        role:  string;
        code:  string;
        phone:  string;
        profilePicture:  string;
        createdAt:  string;
        updatedAt: string;
  },
  companyId: string;
  points: number;
};

export type InputMasks = 'phone' | 'currency';

export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;


