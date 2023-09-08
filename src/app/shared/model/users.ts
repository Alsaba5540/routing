export interface Iusers{
    userName: string;
    userId: number;
}
export interface Iproducts{
    
        pName: string;
        pId: number;
        pStatus:Istatus;
    
}
export type Istatus = "Dileverd" |"Inprocess"