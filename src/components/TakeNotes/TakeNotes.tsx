import { useState } from "react"
import { allNotes } from "take-notes"
import { MyNotesCard } from "../cards/MyNotesCard"

export const TakeNotes:React.FC<{}>=()=>{
    console.log()
    let [allData,setAllData]=useState(allNotes.all())
    return<>
    download pdf
    {allData.map((val:any)=>{
        return <MyNotesCard filelink={val.fileUrl}language={val.language} name={val.studentName} topic={val.topic}/>
    })}
    </>
    
}