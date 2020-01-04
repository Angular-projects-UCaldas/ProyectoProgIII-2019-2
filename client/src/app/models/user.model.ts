export interface UserModel{
    id: string;
    rol: number;
    name: string;
    password: string;
    email: string;
    user: UserModel
}