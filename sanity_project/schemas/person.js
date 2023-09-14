import {defineField,defineType} from "sanity"

export default defineType({
    name:"person",
    title:"Person",
    type:"document",

    fields:[
        defineField({
         name:"name",
         title:"Name",
         type:"string",
        }),
        defineField({
            name:"comment",
            title:"Comment",
            type:"string",
        }),
    ],
})