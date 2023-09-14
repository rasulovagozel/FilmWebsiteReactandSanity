import {defineField,defineType} from "sanity"

export default defineType({
    name:"film",
    title:"Film",
    type:"document",

    fields:[
        defineField({
         name:"id",
         title:"Id",
         type:"number",
        }),
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            hotspot:"true",
        }),
        defineField({
            name:"pg",
            title:"Pg",
            type:"string",
        }),
        defineField({
            name:"name",
            title:"Name",
            type:"string",
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"string",
        }),
        defineField({
            name:"imdb",
            title:"Imdb",
            type:"number"
        }),
    ],
})