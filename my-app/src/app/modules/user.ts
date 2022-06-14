export class user{
    id:string;
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
    organization:string;
    designation:string;
    salary:string;
    status:string;
    is_deleted:string;
    created_at:string;
    updated_at:string;
    constructor(id: string,first_name: string,last_name: string,email: string, phone: string,organization: string,designation: string,salary: string,status: string,is_deleted: string,created_at: string,updated_at:string)
        {
            this.id=id;
            this.first_name=first_name;
            this.last_name=last_name;
            this.email=email,
            this.phone=phone;
            this.organization=organization;
            this.designation=designation;
            this.salary=salary;
            this.status=status;
            this.is_deleted=is_deleted;
            this.created_at=created_at;
            this.updated_at=updated_at
            
        }


}