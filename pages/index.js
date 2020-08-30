import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
              Hi there! I'm an engineering leader with proven ability of building Products and Teams.
              Currently leading teams to build next-gen performance management tools
              &nbsp;<a href="https://www.reflektive.com/" target="_blank">@Reflektive</a>
          </p>
          <p>
              Previously built an Augmented Reality publishing platform at &nbsp;
              <a href="https://www.blippar.com" target="_blank">@BlippAR</a>,
              built tools for artists and movies &nbsp;<a href="https://www.imdb.com/name/nm5103590/">@Dreamworks Animation</a>,
              wrote bluetooth drivers at &nbsp;<a href="https://www.qualcomm.com/" target="_blank">@Qualcomm</a>,
              studied computer science at &nbsp;<a href="https://iiit.ac.in">@IIIT-Hyderabad</a>
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog Posts</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href="/posts/[id]" as={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
