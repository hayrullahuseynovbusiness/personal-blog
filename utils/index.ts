import {GraphQLClient,gql} from 'graphql-request'

const client = new GraphQLClient(`${process.env.DATOCMS_ENDPOINT}`,{
    headers:{
        authorization:`Bearer ${process.env.DATOCMS_APIKEY}`
    }
});

const fields = `
       id
       title
       slug
       content
       createdAt
       image
`;
export const getAllPosts = async (keyword?:string)=>{
    const query = gql`
    query($keyword:String!){
        allBlogposts(filter: {title: {matches: {pattern: $keyword}}}) {
            ${fields}       
         }
      }
      
      
    `;
    const data = await client.request(query,{
        keyword:keyword?keyword:""
    });
    return data;
}
export const getPostBySlug = async (slug?:string)=>{
    const query = gql`
    query($slug:String!){
        blogpost(filter:{slug:{
            eq:$slug
        }}){
            ${fields}
        }
      }`;
    const data = await client.request(query,{
        slug
    });
    return data;   
}