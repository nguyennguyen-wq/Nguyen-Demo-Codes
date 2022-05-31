
type Guid = string & { isGuid: true};
export interface Medlem {
  medlem_Id: Guid;
  fornavn: string;
  etternavn: string;
  bosted?: string;
  mobilTlf: number;  
  email: string;
  fodselsdato: Date;  
  currentKontiId?: number;
}   

     