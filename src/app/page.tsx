import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageGathr from '../../public/gathr.jpg'
import imageTekstream from '../../public/tekstream.jpg'
import imageMyTempie from '../../public/my-tempie.jpg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients: Array<[string, StaticImageData]> = [
  ['Gathr', imageGathr],
  ['Tekstream', imageTekstream],
  ['MyTempie', imageMyTempie],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-12 sm:mt-32 sm:py-20 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <div className="h-px flex-auto bg-neutral-800" />
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white">
            We’ve worked with tons of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-3 gap-x-8 gap-y-10"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className='flex justify-center'>
                    <Image src={logo} alt={client} unoptimized className="h-12 w-auto object-contain" />
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <section id="case-studies">
      <SectionIntro title="Case studies" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Explore how MarchForth has partnered with clients to deliver impactful and innovative software solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>

                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Digital products and intelligent systems built to improve revenue, speed, and operational efficiency."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We partner with B2B SaaS teams to deliver secure, scalable software
          from strategy through launch and ongoing optimization.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
              We build high-performance web platforms that improve conversion,
              search visibility, and user experience. Delivered with Next.js
              and React, deployed on Vercel or AWS, and measured with GA4.
            </ListItem>
            <ListItem title="Cloud architecture">
              We design and modernize cloud foundations to reduce downtime,
              improve release velocity, and control infrastructure spend. We
              implement AWS and Azure architectures with Terraform, Docker,
              GitHub Actions, and Datadog.
            </ListItem>
            <ListItem title="AI/ML">
              We implement practical AI features like document intelligence,
              internal copilots, and support automation to reduce manual work.
              Solutions are built with OpenAI or Anthropic, AWS Bedrock, and
              Pinecone or pgvector with security and governance in mind.
            </ListItem>
            <ListItem title="Custom software development">
              We develop custom systems and integrations that eliminate
              repetitive workflows and improve data visibility across teams. We
              connect platforms including Stripe, Salesforce, HubSpot, and
              Slack with secure access via Auth0 or Okta.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a software consultancy working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Software consultancy based in Tampa, FL.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            With over a decade of expertise in cloud solutions, AI technologies, and custom software development, our team delivers innovative and scalable solutions tailored to your business needs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Gathr' }}
      >
        MarchForth's team went above and beyond in bringing Gathr to life. They totally understood our vision and delivered a solution that perfectly connects campus life and drives participation.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
