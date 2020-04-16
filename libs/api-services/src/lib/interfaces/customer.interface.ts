export enum FoodSecurityLevel {
    Low = 'Very Low Food Security',
    Medium = 'Low Food Security',
    High = 'High Food Security',
    Unknown = 'Unknown Food Security'
}

export interface ICustomerDomain {
    userId: string;
    foodSecurityLevel: FoodSecurityLevel;
}
