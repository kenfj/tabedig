import { Box, Heading } from '@chakra-ui/layout'
import { Badge, Checkbox, Container, VStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React, { ChangeEvent, useState } from 'react'
import Chart from 'react-google-charts'
import Layout from '../components/Layout'
import { ChartData } from '../interfaces'
import { reviewData } from '../utils/sample-data'

const badgeProps = {
  ml: 1,
  variant: "subtle",
  colorScheme: "red",
  verticalAlign: "top",
}

const maxWidthCenter = {
  w: "100%",
  maxW: "600px",
  ml: "auto",
  mr: "auto",
}

type Props = {
  chartData: ChartData
}

const IndexPage = ({ chartData }: Props) => {
  const [isLogScale, setIsLogScale] = useState(false)

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLogScale(e.target.checked)
  }

  return (
    <Layout title="Home">
      <Box pt={12}>
        <Heading as="h1" textAlign="center">
          Tabedig
          <Badge {...badgeProps}>Alpha</Badge>
        </Heading>

        <VStack mt={8} {...maxWidthCenter}>
          <Box>
            &#x1f914; 食べログのレビュー数と評価の関係は??<br />
            &#x1f449; レビュー数と評価はおよそ比例していた。
          </Box>

          <Box w="100%">
            <Chart
              width="100%"
              height="500px"
              chartType="ScatterChart"
              data={chartData}
              options={{
                hAxis: {
                  title: `レビュー数 💬 ${isLogScale ? "(対数目盛)" : ""}`,
                  logScale: isLogScale
                },
                vAxis: { title: "評価 ⭐️" },
                // https://stackoverflow.com/questions/24926240
                tooltip: { isHtml: true, trigger: "both" },
                // https://stackoverflow.com/questions/9661456
                chartArea: { width: "80%", height: "80%" },
                legend: {
                  position: "bottom",
                },
                series: {
                  0: {
                    visibleInLegend: false
                  }
                },
                trendlines: {
                  0: {
                    type: "linear",
                    visibleInLegend: true,
                    showR2: true,
                    color: "purple",
                    lineWidth: 5,
                    opacity: 0.2,
                  }
                },
              }}
            />
          </Box>

          <Container textAlign="center">
            サンプル数: {reviewData.length - 1}店
            <Checkbox ml={8} onChange={handleCheckbox}>
              対数目盛を利用
            </Checkbox>
          </Container>

        </VStack>
      </Box>

      {/* https://stackoverflow.com/questions/45142164 */}
      {/* https://stackoverflow.com/questions/36652580 */}
      {/* https://stackoverflow.com/questions/24795432 */}
      {/* https://qiita.com/cy-hiroshi-chiba/items/84096f9c44dc292f6c5f */}
      <style global jsx>{`
        div.google-visualization-tooltip {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 130px;
          padding: 3px;
          opacity: 0.8;
          background: beige;
          margin-left: -20px !important;
          margin-top: 20px !important;
          z-index:+1;
        }
      `}</style>
    </Layout>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const chartData: ChartData = reviewData
  return { props: { chartData } }
}
