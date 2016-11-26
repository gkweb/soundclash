const content = {
  props: {
    title: 'Sound clash',
    effects: {
      delay: {
        title: 'Delay',
        text: 'Description',
        controls: [
          {
            title: 'Filter',
            attributes: {
              max: 100,
              min: 0,
              location: 10
            }
          },
          {
            title: 'Gain',
            attributes: {
              max: 100,
              min: 0,
              location: 10
            }
          },
          {
            title: 'Feedback',
            attributes: {
              max: 100,
              min: 0,
              location: 90
            }
          }
        ]
      }
    }
  }
}

module.exports = content
