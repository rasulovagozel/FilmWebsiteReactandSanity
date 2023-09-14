import {defineType,defineField} from "sanity"

export default defineType({
    name:"recommend",
    title:"Recommend",
    type:"document",
    
    fields:[
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            hotspot:"true",
        }),
        defineField({
            name:"name",
            title:"Name",
            type:"string",
        }),
        defineField({
            name:"imdb",
            title:"Imdb",
            type:"number"
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"string",
        }),
    ],
})