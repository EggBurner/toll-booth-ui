export interface SignUpRequest{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface SignUpResponse {
    message: string;
    id: string;
}