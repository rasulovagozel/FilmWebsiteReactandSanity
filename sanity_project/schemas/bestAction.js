import {defineField,defineType} from "sanity"

export default defineType({
    name:"bestaction",
    title:"Best Action",
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
        }),
        defineField({
            name:"name",
            title:"Name",
            type:"string",
        }),
        defineField({
            name:"imdb",
            title:"Imdb",
            type:"number",
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"string",
        }),
        defineField({
            name:"pg",
            title:"Pg",
            type:"string"
        }),
        defineField({
            name:"about",
            title:"About",
            type:"string",
        })
    ],
})