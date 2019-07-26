export interface Activity {
    id?: number;
    name?: string;
    requirements?: Array<number>;
    duration?: number;
    cost?: number;
    isSet?: boolean;
}
