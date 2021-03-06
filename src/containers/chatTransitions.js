/* eslint-disable */
// import React so we can use JXS in this file
import React from 'react'
import { Button, Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

import { TechIcon } from '../components/TechIcon'

import ReactLogo from './../static/images/react-logo.png'
import ReduxLogo from './../static/images/redux-logo.png'
import MochaLogo from './../static/images/mocha-logo.svg'
import ChaiLogo from './../static/images/chai-logo.png'
import ES6Logo from './../static/images/es6-logo.png'
import WebpackLogo from './../static/images/webpack-logo.png'
import PythonLogo from './../static/images/python-logo.png'
import DjangoLogo from './../static/images/django-logo.png'

export default [
  {
    pattern: null,
    messages: [
      {
        author: 'Pavel',
        message: <div>Hi! <Icon name='smile'/></div>,
      },
      {
        author: 'Pavel',
        message: "I\'m Pavel, a developer living in Bratislava, Slovakia.",
      },
      {
        author: 'Pavel',
        message: '.. what brought you here?',
      },
    ],
    options: [
      {
        type: 'input',
        title: 'Write me your email',
        goto: 'finish-conversation',
      },
      {
        title: 'Programming',
        goto: 'programming-generally',
      },
      {
        title: 'I want to learn more about you..',
        goto: 'more-about-pavel',
      },
    ],
  },
  {
    pattern: 'programming-generally',
    messages: [
      {
        author: 'Pavel',
        message: [
          "Well .. there's a lot to say here!",
          "Let me start with the fact that I enjoy programming in Python",
          "and Javascript.. ",
        ].join(' '),
      },
    ],
    options: [
      {
        title: "Okay, what's your programming stack?",
        goto: 'programming-stack'
      },
      {
        title: 'Ahh, whatever..',
        goto: 'more-about-pavel',
      }
    ],
  },
  {
    pattern: 'programming-stack',
    messages: [
      {
        author: 'Pavel',
        message: [
          "Currently I code day-to-day in Javascript/React.",
          "Here is my current Javascript stack:",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message:
          <div>
            <TechIcon title="ReactJS" icon={ReactLogo}/>
            <TechIcon title="Redux" icon={ReduxLogo}/>
            <TechIcon title="Mocha" icon={MochaLogo}/>
            <TechIcon title="Chai" icon={ChaiLogo}/>
            <TechIcon title="ES6" icon={ES6Logo}/>
            <TechIcon title="Webpack" icon={WebpackLogo}/>
          </div>
      },
      {
        author: 'Pavel',
        message: [
          "And this is what I've used in Python:",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message:
          <div>
            <TechIcon title="Python" icon={PythonLogo}/>
            <TechIcon title="Django" icon={DjangoLogo}/>
          </div>
      },
      {
        author: 'Pavel',
        message: [
          "Do you want to learn more about one of them?",
        ].join(' '),
      },
    ],
    options: [
      {
        title: 'Javascript/ReactJS development',
        goto: 'javascript-development'
      },
      {
        title: 'Python development',
        goto: 'python-development',
      },
      {
        title: 'Not really..',
        goto: 'more-about-pavel',
      }
    ],
  },
  {
    pattern: 'python-development',
    messages: [
      {
        author: 'Pavel',
        message: 'Great! I\'ve been programming in Python for years!',
      },
      // {
      //   author: 'Pavel',
      //   message: [
      //     'Checkout at my favorite Python wallpaper..'
      //   ],
      // },
      // {
      //   author: 'Pavel',
      //   message: <div><img src='http://www.latoro.com/wallpapers/black-and-white/18195-desktop-wallpapers-python.jpg' height='150px' alt='python-django-image'/></div>
      // },
      {
        author: 'Pavel',
        message: '..what specifically interest you?',
      },
    ],
    options: [
      {
        title: 'Learning Python language',
      },
      {
        title: 'I want to hire Python developer',
      },
      {
        title: 'Nothing really..',
      },
    ],
  },
  {
    pattern: 'I want to hire Python developer',
    messages: [
      {
        author: 'Pavel',
        message:
          <div>
            {'Awesome! Drop me a message to '}
            <a href="mailto:pavel@pavelsvitek.com?subject=Python+project">pavel@pavelsvitek.com</a>
            {' and I will get back to you..'},
          </div>,
      },
      {
        author: 'Pavel',
        message: 'Thanks for the interest.. I will get back to you as soon as possible!',
      },
      {
        author: 'Pavel',
        message: 'Have a great day!',
      },
    ],
  },
  {
    pattern: 'javascript-development',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Javascript is on its rise for the last couple of years! ",
          "I'm sure you've heard of ReactJS, AngularJS and other ",
          "cool libraries for frontend development..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message:  [
          "But there's also backend development with NodeJS..",
          "I've tried some coding in NodeJS and it's a great experience.. ",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <img src='http://cdn1.gadgetify.com/wp-content/uploads/2013/11/code-deck.jpg' height="150px" alt="code-deck"/>
      },
      {
        author: 'Pavel',
        message: '..are you a coder too?',
      },
    ],
    options: [
      {
        title: <div>Yeah! <Icon name='smile'/></div>,
        goto: 'a-coder',
      },
      {
        title: 'Nope :-(',
        goto: 'not-a-coder',
      },
    ]
  },
  {
    pattern: 'more-about-pavel',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Well.. I started programming when I was 13. years old..",
          "From there, I've worked on different projects, I've learned",
          "PHP, C/C++, Python, Javascript, HTML(5), CSS(3) and others..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <div>
          {"I'm reading a lot on Medium. Checkout last articles I've "}
          <a href="https://medium.com/@svitekpavel/has-recommended" target="_blank">recommended </a>
          or read <a href="https://medium.com/@svitekpavel" target="_blank">my stories</a>..
        </div>
      },
    ],
    options: [
      {
        title: <a href="https://medium.com/@svitekpavel" target="_blank">Show me your blogs</a>,
        goto: 'a-coder',
      },
      {
        title: "Okay, what do you develop in now?",
        goto: 'programming-stack'
      },
      {
        title: 'Ok, whatever..',
        goto: 'dummy-section',
      },
    ]
  },
  {
    pattern: 'dummy-section',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Listen, I will have to go to a meeting..",
          "is there anything else you want to ask?",
        ].join(' '),
      },
    ],
    options: [ // @TODO
      {
        title: 'Not really',
        goto: 'finish-conversation',
      },
    ]
  },
  {
    pattern: 'finish-conversation',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Ok ..it was great talking to you, but I will have to go now..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <div>
          {"Take care and don't hesitate to talk to me again.. "} <Icon name='smile'/>,
          </div>
      },
    ],
  },
];
/* eslint-enable */
