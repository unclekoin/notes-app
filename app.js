const yargs = require('yargs')
const { addNote, removeNote, listNotes, readNote } = require("./notes")

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  describe: 'Add a new note',
  handler(argv) {
    addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    listNotes()
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
})

yargs.parse()
