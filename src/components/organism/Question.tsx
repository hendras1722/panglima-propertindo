'use client'

import ArrayMap from '../atoms/ArrayMap'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export default function Question() {
  const QuestionList = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus.  Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus.  Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus.  Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus.  Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.',
    },
  ]
  return (
    <section
      id="question"
      className="md:px-[80px] px-[20px] py-[56px] bg-white "
    >
      <div className="mb-8 text-foreground font-semibold text-6">
        Pertanyaan Umum
      </div>
      <Accordion type="single" collapsible defaultValue={'1'}>
        <ArrayMap
          of={QuestionList}
          render={(item, index) => (
            <AccordionItem key={index + 'accordion'} value={`${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          )}
        />
        {/* <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      */}
      </Accordion>
    </section>
  )
}
