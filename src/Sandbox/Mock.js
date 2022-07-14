export const ChatMockData = {
  transcripts: [
      {
          id: 'botTranscripts',
          title: 'Bot',
          earlierTranscripts: true,
          data: [
              {
                  id: '2499167349',
                  type: 'transcript',
                  timeStamp: '01:20 PM',
                  variant: 'bot',
                  message: 'Hello… This is bot. How can I help you? Please select your category. ',
                  ariaLabel: 'Bot said  Hello… This is bot. How can I help you? Please select your category.  at 01:20 PM'
              },
              {
                  id: '414918079',
                  type: 'transcript',
                  timeStamp: '01:21 PM',
                  variant: 'user',
                  message: 'Policy details',
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  messagePrivacy: {
                      privacy: 'PUBLIC TWEET'
                  },
                  ariaLabel: 'Sara Davis said Policy details at 01:21 PM via Public Tweet'
              },
              {
                  id: '4750473261',
                  type: 'transcript',
                  timeStamp: '01:22 PM',
                  variant: 'bot',
                  message: 'Please select what would you like to know about your policy. 😃😃',
                  ariaLabel: 'Bot said  Please select what would you like to know about your policy. at 01:22 PM'
              },
              {
                  id: '925521127',
                  type: 'transcript',
                  timeStamp: '01:23 PM',
                  variant: 'user',
                  message: 'Policy terms and conditions',
                  messagePrivacy: {
                      privacy: 'PUBLIC TWEET'
                  },
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  Policy terms and conditions at 01:23 PM'
              }
          ]
      },
      {
          id: 'preChatTranscript',
          title: 'Questionnaire',
          earlierTranscripts: false,
          data: [
              {
                  id: '1457969897',
                  type: 'transcript',
                  timeStamp: '01:23 PM',
                  variant: 'question',
                  message: 'Could you please enter your query',
                  ariaLabel: 'Customer was asked for Could you please enter your query at 01:23 PM'
              },
              {
                  id: '4633052071',
                  type: 'transcript',
                  timeStamp: '01:23 PM',
                  variant: 'user',
                  message: 'I would like to know my policy terms and conditions',
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  I would like to know my policy terms and conditions at 01:23 PM'
              },
              {
                  id: '3105885518',
                  type: 'transcript',
                  timeStamp: '01:23 PM',
                  variant: 'question',
                  message: 'Could you please select the policy',
                  ariaLabel: 'Customer was asked for Could you please select the policy at 01:23 PM'
              },
              {
                  id: '3008407298',
                  type: 'transcript',
                  timeStamp: '01:23 PM',
                  variant: 'user',
                  message: 'Insurance policy - 5545456668555',
                  messagePrivacy: {
                      privacy: 'PUBLIC TWEET'
                  },
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  Insurance policy - 5545456668555 at 01:23 PM via Public Tweet'
              },
              {
                  id: '4700050925',
                  type: 'system',
                  message: 'Chat escalated to live agent',
                  timeStamp: '01:23 PM'
              },
              {
                  id: '3608004939',
                  type: 'system',
                  message: 'Agent Fred joined the chat',
                  timeStamp: '01:24 PM'
              }
          ]
      },
      {
          id: 'csrTranscript',
          earlierTranscripts: false,
          title: 'Transcripts: Agent Fred and Jim',
          data: [
              {
                  id: '4713954822',
                  type: 'transcript',
                  timeStamp: '01:24 PM',
                  messagePrivacy: {
                      privacy: 'PUBLIC TWEET'
                  },
                  variant: 'user',
                  message: 'Hello, Welcome to U-Plus. How can I help you?',
                  avatarInfo: {
                      name: 'Jim'
                  },
                  ariaLabel: 'Jim said  Hello, Welcome to U-Plus. How can I help you? at 01:24 PM via Public Tweet'
              },
              {
                  id: '2582654831',
                  type: 'transcript',
                  timeStamp: '01:25 PM',
                  variant: 'user',
                  message: 'Hi, I would like to know my policy terms and condition',
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  Hi, I would like to know my policy terms and condition at 01:25 PM'
              },
              {
                  id: '4422603601',
                  type: 'transcript',
                  timeStamp: '01:26 PM',
                  messagePrivacy: {
                      privacy: 'PUBLIC TWEET'
                  },
                  variant: 'user',
                  message: 'You can refer this article to know more',
                  avatarInfo: {
                      name: 'Jim'
                  },
                  ariaLabel: 'Jim said  You can refer this article to know more at 01:26 PM via Public Tweet'
              },
              {
                  id: '973978246',
                  type: 'system',
                  message: 'Customer opened knowledge article',
                  timeStamp: '01:26 PM'
              },
              {
                  id: '44764769',
                  type: 'transcript',
                  timeStamp: '01:26 PM',
                  variant: 'user',
                  message: 'Also I would like to know my policy validity',
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  Also I would like to know my policy validity at 01:26 PM'
              },
              {
                  id: '1052005901',
                  type: 'transcript',
                  timeStamp: '01:27 PM',
                  variant: 'user',
                  message: 'Is that fine if I can transfer your chat to serve better? ',
                  avatarInfo: {
                      name: 'Jim'
                  },
                  ariaLabel: 'Jim said  Is that fine if I can transfer your chat to serve better?  at 01:27 PM'
              },
              {
                  id: '474082342',
                  type: 'transcript',
                  timeStamp: '01:27 PM',
                  variant: 'user',
                  message: 'Yeah Sure',
                  avatarInfo: {
                      name: 'Sara Davis'
                  },
                  ariaLabel: 'Sara Davis said  Yeah Sure at 01:27 PM'
              },
              {
                  id: '2128368768',
                  type: 'system',
                  message: 'Chat has been transferred',
                  timeStamp: '01:27 PM'
              }
          ]
      }
  ],
  participants: {
      transcriptUser1: {
          avatarInfo: {
              name: 'Jim'
          }
      },
      transcriptUser2: {
          avatarInfo: {
              name: 'Fred'
          }
      },
      sender: {
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          }
      },
      sender2: {
          variant: 'sender',
          direction: 'out'
      },
      receiver: {
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          }
      },
      other: {
          variant: 'other',
          direction: 'in',
          avatarInfo: {
              name: 'Pegasystems',
              imageSrc: 'https://www.pega.com/sites/default/files/media/images/2018-12/Pega.com-og.png'
          }
      }
  },
  chatMessages: [
      {
          id: '4276065002',
          type: 'system',
          message: 'John brown has joined',
          timeStamp: '01:44 PM'
      },
      {
          id: '88365643',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Hi, Welcome to u-plus. How can I help you ?',
          timeStamp: '1:44 PM',
          status: 'Opened',
          attachments: [
              {
                  id: '2499167340',
                  name: 'Location',
                  icon: 'document',
                  meta: 'PNG 0.1 MB',
                  thumbnail: 'https://pegasystems.github.io/uplus-wss/health_provider/img/secondary-options.jpg'
              },
              {
                  id: '2499167341',
                  name: 'FAQ with detailed terms and conditions of the policy',
                  icon: 'document-pdf',
                  meta: 'PDF 0.7 MB'
              }
          ],
          ariaLabel: 'John Brown said  Hi, Welcome to u-plus. How can I help you ? at 1:44 PM with 2 attachments'
      },
      {
          id: '3245595973',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'You may also reach us via',
          timeStamp: '1:45 PM',
          pagePushLinks: [
              {
                  id: '2499167349',
                  href: 'https://collaborate.pega.com/',
                  thumbnail: 'https://community.pega.com/sites/default/files/styles/480/public/media/images/2020-02/AskExpert.png?itok=ef2MVbOV',
                  title: 'Ask the expert'
              }
          ],
          ariaLabel: 'John Brown said  You may also reach us via at 1:45 PM with 1 link'
      },
      {
          id: '3865379335',
          type: 'message',
          variant: 'receiver',
          messagePrivacy: 'PUBLIC TWEET',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'Hi, I would like to know the validity of my policy',
          ariaLabel: 'Sara Davis said  Hi, I would like to know the validity of my policy via Public Tweet'
      },
      {
          id: '777315059',
          type: 'message',
          variant: 'receiver',
          messagePrivacy: 'PUBLIC TWEET',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'Could you please help',
          timeStamp: '1:45 PM',
          ariaLabel: 'Sara Davis said  Could you please help at 1:45 PM via Public Tweet'
      },
      {
          id: '4001121034',
          type: 'system',
          message: 'Pegasystems has joined'
      },
      {
          id: '779591083',
          type: 'message',
          variant: 'other',
          direction: 'in',
          avatarInfo: {
              name: 'Pegasystems',
              imageSrc: 'https://www.pega.com/sites/default/files/media/images/2018-12/Pega.com-og.png'
          },
          message: 'Great, our CSR will help you with that',
          timeStamp: '1:46 PM',
          status: 'Delivered',
          ariaLabel: 'Pegasystems said  Great, our CSR will help you with that at 1:46 PM'
      },
      {
          id: '2683629622',
          type: 'message',
          variant: 'sender',
          messagePrivacy: 'PUBLIC REPLY',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Sure',
          timeStamp: '1:48 PM',
          status: 'Delivered',
          ariaLabel: 'John Brown said  Sure at 1:48 PM via Public Tweet'
      },
      {
          id: '2748689942',
          type: 'message',
          variant: 'other',
          direction: 'in',
          avatarInfo: {
              name: 'Pegasystems',
              imageSrc: 'https://www.pega.com/sites/default/files/media/images/2018-12/Pega.com-og.png'
          },
          message: ' Carry on',
          timeStamp: '1:49 PM',
          attachments: [
              {
                  id: '2499167343',
                  name: 'Departments mapping',
                  icon: 'document-doc',
                  meta: 'PDF 0.1 MB'
              }
          ],
          ariaLabel: 'Pegasystems said   Carry on at 1:49 PM with 1 attachment'
      },
      {
          id: '4110947991',
          type: 'message',
          variant: 'other',
          direction: 'in',
          messagePrivacy: 'PUBLIC REPLY',
          avatarInfo: {
              name: 'Pegasystems',
              imageSrc: 'https://www.pega.com/sites/default/files/media/images/2018-12/Pega.com-og.png'
          },
          message: ' Refer these documents for more FAQ',
          timeStamp: '1:49 PM',
          attachments: [
              {
                  id: '2499167345',
                  name: 'FAQ with detailed terms and conditions of the policy',
                  icon: 'document-doc',
                  meta: 'PDF 0.7 MB'
              },
              {
                  id: '2499167346',
                  name: 'Privacy policy',
                  icon: 'document-doc',
                  meta: 'WORD 0.1 MB'
              }
          ],
          ariaLabel: 'Pegasystems said   Refer these documents for more FAQ at 1:49 PM with 2 attachments via Public Tweet'
      },
      {
          id: '2549273884',
          type: 'system',
          message: 'Pegasystems has left'
      },
      {
          id: '3375453344',
          type: 'message',
          variant: 'sender',
          messagePrivacy: 'PUBLIC REPLY',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Could you please help me with your account num',
          timeStamp: '1:50 PM',
          attachments: [
              {
                  id: '2499167347',
                  name: 'Security policy',
                  icon: 'document-pdf',
                  meta: 'PDF 6.1 MB'
              }
          ],
          ariaLabel: 'John Brown said  Could you please help me with your account num at 1:50 PM with 1 attachment via Public Tweet'
      },
      {
          id: '1868448522',
          type: 'message',
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'Yeah, sure please give me a second',
          ariaLabel: 'Sara Davis said  Yeah, sure please give me a second '
      },
      {
          id: '1295058543',
          type: 'message',
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          timeStamp: '1:50 PM',
          attachments: [
              {
                  id: '2499167348',
                  name: 'Vehicle insurance',
                  icon: 'document-doc',
                  meta: 'WORD 1.1 MB'
              }
          ],
          ariaLabel: 'Sara Davis said  5588-8899-45-89 at 1:50 PM with 1 attachment'
      },
      {
          id: '2690247642',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Let me pick your details',
          status: 'Delivered',
          ariaLabel: 'John Brown said  Let me pick your details '
      },
      {
          id: '1208949065',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Can I please transfer your chat request to concerned department please ?',
          timeStamp: '1:51 PM',
          ariaLabel: 'John Brown said  Can I please transfer your chat request to concerned department please ? at 1:51 PM'
      },
      {
          id: '4302656892',
          type: 'message',
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'Sure',
          timeStamp: '1:51 PM',
          ariaLabel: 'Sara Davis said  Sure at 1:51 PM'
      },
      {
          id: '658052414',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          avatarInfo: {
              name: 'John Brown'
          },
          message: 'Please give me a moment',
          timeStamp: '1:51 PM',
          ariaLabel: 'John Brown said  Please give me a moment at 1:51 PM'
      },
      {
          id: '719933419',
          type: 'system',
          message: 'Mike has joined'
      },
      {
          id: '679831597',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          message: 'Hi Sara. This is Mike. John has discussed with me. I will be helping you out with the required details',
          timeStamp: '1:51 PM',
          ariaLabel: 'You said Hi Sara. This is Mike. John has discussed with me. I will be helping you out with the required details at 1:51 PM'
      },
      {
          id: '2785439809',
          type: 'system',
          message: 'John brown has left'
      },
      {
          id: '85859690',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          message: 'Ok, your insurance is valid until Dec 21, 2020 11:00 AM',
          timeStamp: '1:52 PM',
          ariaLabel: 'You said Ok, your insurance is valid until Dec 21, 2020 11:00 AM at 1:52 PM'
      },
      {
          id: '2484793043',
          type: 'message',
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'Thanks',
          timeStamp: '1:52 PM',
          ariaLabel: 'Sara Davis said  Thanks at 1:52 PM'
      },
      {
          id: '352967030',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          message: 'Is there anything I can help you with',
          timeStamp: '1:52 PM',
          ariaLabel: 'You said Is there anything I can help you with at 1:52 PM'
      },
      {
          id: '3432757116',
          type: 'message',
          variant: 'receiver',
          direction: 'in',
          avatarInfo: {
              name: 'Sara Davis'
          },
          message: 'I am good.😃',
          timeStamp: '1:53 PM',
          ariaLabel: 'Sara Davis said  I am good 😃. at 1:53 PM'
      },
      {
          id: '2432461831',
          type: 'message',
          variant: 'sender',
          direction: 'out',
          message: 'Thanks for contacting us, have a great day',
          timeStamp: '1:53 PM',
          ariaLabel: 'You said Thanks for contacting us, have a great day at 1:53 PM'
      },
      {
          id: '2965626280',
          type: 'system',
          message: 'Chat has been ended'
      }
  ],
  defaultAttachments: [
      {
          id: '4455774588',
          name: '03/2020 statement.pdf'
      },
      {
          id: '44557745889',
          name: 'Policy T&C.pdf'
      }
  ],
  suggestedReplies: [
      {
          id: 'suggested_reply_1',
          message: 'Hello, Good morning Sara. How can I help you today',
          confidence: 94
      },
      {
          id: 'suggested_reply_2',
          message: 'Sorry to hear that. I will surely help you resolve the issue. Can you please provide the policy id, so that I can get more details',
          confidence: 75
      }
  ],
  phrasesDisplayNames: [
      'Account > Account balance',
      'Agreement > End of a case/interaction',
      'Agreement > Mid interaction',
      'Apologize > Apologize - ask customer to',
      'Apologize > Thanks for patience',
      'Ask for transfer > Agent not available',
      'Ask for transfer > Agent not available - call back',
      'Ask for transfer > Agent not available - stall',
      'Account > Account balance',
      'Agreement > End of a case/interaction',
      'Agreement > Mid interaction',
      'Apologize > Apologize - ask customer to',
      'Apologize > Thanks for patience',
      'Ask for transfer > Agent not available',
      'Ask for transfer > Agent not available - call back',
      'Ask for transfer > Agent not available - stall',
      'Account > Account balance'
  ],
  phrasesMessages: [
      'Ms. Sara J Connor your account balance is $5226.32',
      'My pleasure! Is there anything else I can do for you today?',
      'You are welcome!',
      "Ms.Connor. We do not respond to that kind of language. I'm doing my best to help you. Please be civil.",
      'Thanks for your patience. I am working on your request. I will be with you shortly.',
      'It looks like the agent we were looking to transfer you to will not be available. One moment please while I see whether someone else can assist.',
      "The agent I was looking to transfer you to isn't available. Would it be possible for us to call you when a specialist is available?",
      'It looks like the agent we were looking to transfer you to will not be available. One moment please while I see whether someone else can assist.',
      'Ms. Sara J Connor your account balance is $5226.32',
      'My pleasure! Is there anything else I can do for you today?',
      'You are welcome!',
      "Ms.Connor. We do not respond to that kind of language. I'm doing my best to help you. Please be civil.",
      'Thanks for your patience. I am working on your request. I will be with you shortly.',
      'It looks like the agent we were looking to transfer you to will not be available. One moment please while I see whether someone else can assist.',
      "The agent I was looking to transfer you to isn't available. Would it be possible for us to call you when a specialist is available?",
      'It looks like the agent we were looking to transfer you to will not be available. One moment please while I see whether someone else can assist.',
      'Ms. Sara J Connor your account balance is $5226.32'
  ]
};
