export type Person = {
    id: number;
    email: number;
    first_name: string;
    last_name: string;
};



export interface PersonData extends Person {
  subRows?: PersonData[];
}

