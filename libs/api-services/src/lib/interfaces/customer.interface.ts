export enum FoodSecurityLevel {
    Low,
    Medium,
    High,
    Unknown
}

export interface ICustomerDomain {
    userId: string;
    foodSecurityLevel: FoodSecurityLevel;
}
