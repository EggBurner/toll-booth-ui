export interface LinkRequest {
    userId: string;
}

export interface Link {
    _id: string;
    targetLink: string;
    shortCode: string;
    linkDateCreated: string;
    ownerID: string;
    status: string;
    visitCount: number;
    pinProtected: boolean;
}

export interface LinkResponse {
    links: Link[];
}

export interface CreateLinkRequest{
    targetLink: string;
    pinProtected: boolean;
    pin: string;
    ownerID: string;
}

export interface CreateLinkResponse {
        message: string;
        id: string;
}

export interface RedirectRequestResponse {
    targetLink: string;
    shortCode: string;
    status: string;
    pinProtected: boolean;
}

export interface RedirectRequest {
    shortCode: string,
    pin: string,
}

export interface RedirectResponse {
    targetLink: string,
    pinMatch: boolean,
}