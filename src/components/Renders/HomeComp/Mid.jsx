import { Box } from "@chakra-ui/react";
import styles from "./mid.module.css";
import Posts from "./Posts";

const posts = [
    {id:1,user:"Lucas rom",title:"Improve Code in Your Ruby Application with RubyCritic",comment:34},
    {id:2,user:"Jack Hid",title:"Vue vs. Angular: Which is better for front-end development? (2022)",comment:3},
    {id:3,user:"Chris wayne",title:"Remove Letter To Equalize Frequency",comment:45},
    {id:4,user:"Kim blank",title:"Scraping Linkedin Data with Proxycurl, Python Program, and Nodejs",comment:8},
    {id:5,user:"Sken claw",title:"25 Projects For Beginner to Advanced Developers With Free Tutorials",comment:16},
]


export default function Mid() {
    return (<>
        <Box className={styles.mid}>
            {posts?.map((el)=>{
                return <Posts key={el.id} {...el}/>
            })}
        </Box>
    </>)
}