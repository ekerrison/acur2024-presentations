const json = {
  "title": "ACUR2024",
  "description": "This form is to submit your presentation file in advance",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "Name",
          "title": "Full Name",
          "description": "Enter your full name here matching your registration",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "Session",
          "title": "Your session",
          "description": "Enter the session you are speaking in here",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "question1",
          "title": "Upload your presentation here ",
          "description": "Note the file format should be either PPT or PDF.",
          "isRequired": true,
          "acceptedTypes": ".pdf, .ppt, .pptx"
        }
      ]
    }
  ]
}