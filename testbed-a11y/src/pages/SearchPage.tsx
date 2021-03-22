import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { BelowRight } from '@pluralsight/ps-design-system-position'
import Card from '@pluralsight/ps-design-system-card'
import Carousel from '@pluralsight/ps-design-system-carousel'
import {
  AsideLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import { MoreIcon } from '@pluralsight/ps-design-system-icon'
import Row from '@pluralsight/ps-design-system-row'
import { Heading } from '@pluralsight/ps-design-system-text'
import faker from 'faker'
import { FC, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './SearchPage.module.css'

interface Course {
  author: string
  href: string
  id: string
  image: { src: string }
  level: string
  title: string
  user: { progress: number }
}

const generateCourse = () => ({
  author: faker.name.firstName() + ' ' + faker.name.lastName(),
  href: '/',
  image: { src: faker.image.imageUrl(540, 360, undefined, true) },
  id: faker.random.uuid(),
  level: faker.random.arrayElement(['Beginner', 'Intermediate', 'Advanced']),
  title: faker.commerce.productName(),
  user: { progress: faker.random.number(100) }
})

export const SearchPage: FC = props => {
  const { children, ...rest } = props

  const query = useQuery()
  const searchTerm = query.get('term') || 'react'

  const [perPage] = useState(10)
  const [actionsShownFor, setActionsShownFor] = useState<string>()

  const recommended = useMemo<Course[]>(
    () => Array(5).fill(null).map(generateCourse),
    []
  )

  const related = useMemo<Course[]>(
    () => Array(9).fill(null).map(generateCourse),
    []
  )

  const results = useMemo<Course[]>(
    () => Array(34).fill(null).map(generateCourse),
    []
  )

  const mockClickHandler = () => {}
  const mockUniqueId = () => 'mock-id'

  return (
    <PageWidthLayout className={styles.page} {...rest}>
      <Heading size={Heading.sizes.small}>
        <h1>Search results for '{searchTerm}'</h1>
      </Heading>

      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <AsideCard title="Related Topics">
              <p>TODO</p>
            </AsideCard>

            <AsideCard title="People also search for">
              <p>TODO</p>
            </AsideCard>
          </AsideLayout.Aside>
        }
        asidePosition={AsideLayout.asidePositions.last}
        main={
          <AsideLayout.Main>
            <Heading size={Heading.sizes.medium}>
              <h2>Recommended</h2>
            </Heading>

            <Carousel
              controlNext={
                <Carousel.Control direction="next" onClick={mockClickHandler} />
              }
              controlPrev={
                <Carousel.Control direction="prev" onClick={mockClickHandler} />
              }
              uniqueId={mockUniqueId}
              size={Carousel.sizes.wide}
            >
              {recommended.map(course => (
                <Carousel.Item key={course.id}>
                  {(_data: unknown) => (
                    <Card
                      actionBarVisible
                      actionBar={[
                        <BelowRight
                          show={
                            <ActionMenu>
                              <ActionMenu.Item>Useless item</ActionMenu.Item>
                            </ActionMenu>
                          }
                          key={`${course.id}--actions`}
                          when={course.id === actionsShownFor}
                        >
                          <Card.Action
                            onClick={() => {
                              setActionsShownFor(
                                course.id === actionsShownFor
                                  ? undefined
                                  : course.id
                              )
                            }}
                            title="See more"
                            icon={<MoreIcon />}
                          />
                        </BelowRight>
                      ]}
                      image={<Card.Image src={course.image.src} />}
                      onClick={mockClickHandler}
                      metadata1={[course.author, course.level]}
                      progress={course.user.progress}
                      title={<Card.Title>{course.title}</Card.Title>}
                    />
                  )}
                </Carousel.Item>
              ))}
            </Carousel>

            <br />
            <Carousel size={Carousel.sizes.wide}>
              {related.map(course => (
                <Card
                  image={<Card.Image src={course.image.src} />}
                  key={course.id}
                  metadata1={[course.author, course.level]}
                  progress={course.user.progress}
                  title={<Card.Title>{course.title}</Card.Title>}
                />
              ))}
            </Carousel>

            <br />
            <Heading size={Heading.sizes.medium}>
              <h2>{results.length} Results</h2>
            </Heading>

            {results.slice(0, perPage).map(course => (
              <Row
                image={<Row.Image src={course.image.src} />}
                metadata1={[
                  <Row.TextLink>
                    <a href={course.href}>{course.author}</a>
                  </Row.TextLink>,
                  course.level
                ]}
                progress={course.user.progress}
                title={
                  <Row.TextLink>
                    <a href={course.href}>{course.title}</a>
                  </Row.TextLink>
                }
              />
            ))}

            <Pagination />
          </AsideLayout.Main>
        }
      />
    </PageWidthLayout>
  )
}

const AsideCard: React.FC<{ title: string }> = props => {
  const { children, title, ...rest } = props

  return (
    <div className={styles.card} {...rest}>
      <Heading className={styles.cardTitle} size={Heading.sizes.small}>
        <h2>{title}</h2>
      </Heading>

      {children}
    </div>
  )
}

const Pagination: React.FC = () => {
  return <div>TODO: pagination</div>
}

const useQuery = () => new URLSearchParams(useLocation().search)
