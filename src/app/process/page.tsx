import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their day-to-day operations to understand
          what makes their business tick.
        </p>
        <p>
          We align with product, engineering, and leadership stakeholders to map
          constraints, identify high-impact opportunities, and define clear
          success metrics. This gives us a shared view of the current state and
          the desired future state of the{' '}
          <strong className="font-semibold text-neutral-950">business</strong>.
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          a practical execution path with clear milestones, scope boundaries, and
          budget guidance.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Technical discovery</TagListItem>
        <TagListItem>Architecture review</TagListItem>
        <TagListItem>Workflow mapping</TagListItem>
        <TagListItem>Proofs of concept</TagListItem>
        <TagListItem>Delivery roadmap</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the discovery phase, we define the delivery plan and begin
          implementation in structured iterations. Each milestone is tied to
          measurable outcomes and real business priorities.
        </p>
        <p>
          Every engagement has a dedicated delivery lead who keeps communication
          direct and transparent. Product, design, and engineering stay aligned
          through weekly checkpoints, shared backlogs, and clear decision logs.
        </p>
        <p>
          We surface risks early, adapt when requirements evolve, and protect
          scope through disciplined planning. That balance helps teams move
          quickly without compromising quality.
        </p>
      </div>

    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach launch, we validate the solution against business and
          technical goals, then finalize rollout plans with clear owners and
          timelines. Any changes in{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          {' '}are assessed with impact on scope, timeline, and risk.
        </p>
        <p>
          We prioritize reliability and observability before release, so teams
          can deploy with confidence. Final-stage{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          focuses on hardening critical paths, validating data flows, and
          preparing support runbooks.
        </p>
        <p>
          We ensure that every business-critical workflow is{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          at launch, with a pragmatic post-launch plan to iterate on secondary
          features and long-term{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance.
          </strong>{' '}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          We implement practical test coverage across critical paths, including
          automated regression checks and release validation.
        </ListItem>
        <ListItem title="Infrastructure">
          We deploy with production-ready infrastructure, right-sized for your
          requirements and designed for reliability and scale.
        </ListItem>
        <ListItem title="Support">
          We provide structured handoff documentation and ongoing support options
          so your team can operate confidently after launch.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We combine proven engineering practices with modern tools to deliver
          dependable systems that can evolve with your business.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We start with clear requirements, precise planning, and thoughtful
            execution details to reduce risk early.
          </GridListItem>
          <GridListItem title="Efficient">
            We focus on high-impact work first, delivering value quickly through
            iterative releases.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every organization is different, so we tailor our approach to your
            team, constraints, and goals.
          </GridListItem>
          <GridListItem title="Honest">
            We communicate openly about progress, tradeoffs, and risks so
            decisions can be made with confidence.
          </GridListItem>
          <GridListItem title="Loyal">
            We build long-term partnerships and stay invested in outcomes beyond
            the initial launch.
          </GridListItem>
          <GridListItem title="Innovative">
            We adopt new technologies deliberately, choosing what is proven and
            appropriate for your context.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Learn how MarchForth discovers, builds, and delivers software solutions with clarity, speed, and reliability.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We partner with teams to discover the right opportunities, build with
          discipline, and deliver software that performs in production.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
