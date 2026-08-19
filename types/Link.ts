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