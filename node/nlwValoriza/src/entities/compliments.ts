import { Entity,PrimaryColumn,Column,CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import{v4 as uuid} from "uuid"
import { Tag } from "./tag";
import { User } from "./User";
@Entity("compliments")
class Compliments {
@PrimaryColumn()
readonly id:string

@Column()
user_sender:string
@JoinColumn({name:"user_sender"})
@ManyToOne(()=>User)
userSender:User

@Column()
user_reserver:string
@JoinColumn({name:"user_reserver"})
@ManyToOne(()=>User)
userRecerver: User

@Column()
tag_id:string
@JoinColumn({name:"tag_id"})
@ManyToOne(()=>Tag)
tag:Tag

@Column()
mensage:string



@CreateDateColumn()
created_at:Date

constructor(){
    if(!this.id){
        this.id= uuid()
    }

}

}
export {Compliments}