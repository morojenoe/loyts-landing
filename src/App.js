import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import { disableBodyScroll } from 'body-scroll-lock';
import LinkSection from './link-section';
import VerticalNavigationStepper from './vertical-vav-stepper/vertical-nav-stepper';
import LandingSection from './landing-section/landing-section';


import sections from './app-sections';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.lastEventTime = -1;
    this.state = {
      slideId: 0,
      numberOfSlides: 6,
    };
  }

  componentDidMount() {
    disableBodyScroll(this.sectionsDiv);
  }

  onKeyDown(event) {
    event.preventDefault();
    if (event.keyCode === 40 && this.canProcessEvent()) {
      this.lastEventTime = Date.now();
      this.nextSlide();
    }
  }

  onKeyUp(event) {
    event.preventDefault();
    if (event.keyCode === 38 && this.canProcessEvent()) {
      this.lastEventTime = Date.now();
      this.prevSlide();
    }
  }

  onScroll(event) {
    event.preventDefault();
    if (this.canProcessEvent()) {
      this.lastEventTime = Date.now();
      if (event.detail < 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  onTouchStart(event) {
    if (this.canProcessEvent()) {
      const { pageY } = event.touches[0];
      this.touchStart = pageY;
    }
  }

  onTouchEnd(event) {
    if (this.canProcessEvent()) {
      this.lastEventTime = Date.now();
      const { pageY } = event.changedTouches[0];
      const diffY = pageY - this.touchStart;
      if (Math.abs(diffY) > 50) {
        console.log(pageY, this.touchStart);
        if (diffY > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }
    }
  }

  scrollTo(scrollTo) {
    scroller.scrollTo(scrollTo, {
      duration: 800,
      smooth: true,
      ignoreCancelEvents: true,
    });
  }

  prevSlide() {
    if (this.state.slideId > 0) {
      const curSlide = this.state.slideId;
      this.setState({ slideId: curSlide - 1 });
      this.scrollTo(sections[curSlide - 1].id);
    }
  }

  nextSlide() {
    if (this.state.slideId + 1 < this.state.numberOfSlides) {
      const curSlide = this.state.slideId;
      this.setState({ slideId: curSlide + 1 });
      this.scrollTo(sections[curSlide + 1].id);
    }
  }

  toSlide(i) {
    if (i >= 0 && i < this.state.numberOfSlides) {
      this.setState({ slideId: i });
      this.scrollTo(sections[i].id);
    }
  }

  canProcessEvent() {
    const oneSecond = 1000;
    const curTime = Date.now();
    return curTime - this.lastEventTime > oneSecond;
  }

  mouseEvent(event) {
    event.preventDefault();
    const { deltaY } = event;
    if (this.canProcessEvent()) {
      this.lastEventTime = Date.now();
      if (deltaY < 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  navigationBar() {
    if (this.state.slideId === 0) {
      return null;
    }
    return (
      <VerticalNavigationStepper
        item={this.state.slideId}
        left={this.state.navLeft}
        top={this.state.navTop}
        onClick={i => this.toSlide(i)}
      />
    );
  }

  linkSection() {
    if (this.state.slideId + 1 === this.state.numberOfSlides) {
      return null;
    }
    return (
      <LinkSection
        onClick={() => this.nextSlide()}
        firstSlide={this.state.slideId === 0}
        nextSlideLinkText="Discover"
      />
    );
  }

  render() {
    const sectionTags = sections.map((section, id) => (
      <LandingSection
        scrollTo={id + 1 < sections.length ? sections[id + 1].id : undefined}
        title={section.title}
        text={section.text}
        imageAlt={section.imageAlt}
        imageSrc={section.imageSrc}
        sectionId={id}
        numberOfSections={this.state.numberOfSlides}
        color={sections[this.state.slideId].color}
        id={section.id}
        key={section.id}
      />
    ));
    return (
      <div
        className="sections"
        ref={(sectionsDiv) => { this.sectionsDiv = sectionsDiv; }}
        onWheel={e => this.mouseEvent(e)}
        onKeyDown={e => this.onKeyDown(e)}
        onKeyUp={e => this.onKeyUp(e)}
        onScroll={e => this.onScroll(e)}
        onTouchStart={e => this.onTouchStart(e)}
        onTouchEnd={e => this.onTouchEnd(e)}
      >
        {sectionTags}
        {this.navigationBar()}
        {this.linkSection()}
      </div>
    );
  }
}

export default App;
