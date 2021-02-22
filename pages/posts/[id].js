import Layout from "../../components/layout";
import Date from "../../components/date";
import Head from "next/head";
import utilstyles from "../../styles/utils.module.css";
import { getAllPostsIds, getPostData } from "../../lib/posts";
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilstyles.headingXl}>{postData.title}</h1>
        <div className={utilstyles.lightText}>
          <Date dateString={postData.date}></Date>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  console.log(process.cwd());
  console.log(__dirname);
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
