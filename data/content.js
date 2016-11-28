let content = {
  props: {
    title: 'Sound clash',
    effects: {
      delay: {
        title: 'Delay',
        text: 'Description',
        controls: [
          {
            title: 'Time',
            id: 'delay-time',
            attributes: {
              max: 1,
              min: 0,
              step: 0.05,
              location: 10
            }
          },
          {
            title: 'Feedback',
            id: 'delay-feedback',
            attributes: {
              max: 0.95,
              min: 0,
              step: 0.05,
              location: 10
            }
          },
          {
            title: 'Filter',
            id: 'delay-filter',
            attributes: {
              max: 4000,
              min: 0,
              step: 100,
              location: 90
            }
          }
        ]
      }
    },
    backingTrack: {
      title: 'Backing track',
      sources: [
        {
          attributes: {
            src: '/content/video/the_gladiators-The_rich_man_poor_man.mp4',
            type: 'video/mp4'
          }
        }
      ]
    }

  }
}

module.exports = content
