import { useState } from 'react';
import { ArrowRight, ChevronDown, Clock, HelpCircle, LifeBuoy } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { Button, SectionHeading, useScrollReveal } from '../components/ui.jsx';
import { faqGroups, faqs, images } from '../hotelData.js';
import { useApp } from '../context/AppContext.jsx';

export default function FaqPage() {
  useScrollReveal();
  const { openContact } = useApp();
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="FAQ"
        intro="The questions our guests ask most often, answered plainly: arrival times, breakfast, accessibility, children, and what this demonstration can and cannot do."
        image={images.gardens}
        imageAlt="Quiet garden paths and seating at the resort"
        facts={[
          { icon: HelpCircle, label: `${faqs.length} common questions` },
          { icon: Clock, label: 'Reception open 24 hours' },
          { icon: LifeBuoy, label: 'Team ready to help' },
        ]}
      />

      <section className="faq-section section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="Before you arrive" tone="gradient">Questions our guests ask most.</SectionHeading>
          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.id}>
                  <h3>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true"><ChevronDown size={18} /></span>
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    hidden={!isOpen}
                  >
                    <div className="faq-answer-inner"><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contour-surface section-space">
        <div className="container reveal">
          <SectionHeading eyebrow="More questions">Grouped by topic.</SectionHeading>
          <div className="faq-groups">
            {faqGroups.map((group) => (
              <div className="faq-group" key={group.id}>
                <h3 className="faq-group-title">{group.title}</h3>
                <div className="faq-list">
                  {group.items.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.id}>
                        <h4>
                          <button
                            type="button"
                            className="faq-question"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${item.id}`}
                            id={`faq-question-${item.id}`}
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                          >
                            <span>{item.question}</span>
                            <span className="faq-icon" aria-hidden="true"><ChevronDown size={18} /></span>
                          </button>
                        </h4>
                        <div
                          className="faq-answer"
                          id={`faq-answer-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-question-${item.id}`}
                          hidden={!isOpen}
                        >
                          <div className="faq-answer-inner"><p>{item.answer}</p></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-action">
            <p>Still have a question about your stay?</p>
            <Button variant="teal" onClick={() => openContact({ topic: 'guest-services' })}>Ask Our Team<ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
