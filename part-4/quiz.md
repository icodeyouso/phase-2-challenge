 Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- When you run a command in the terminal, where does BASH look for that command?
the current directory
- On a UNIX computer, how do you stop a running process?
ctr + C
- What packages do you have installed via homebrew?
git,icu4c,pcre,watchman
heroku,node,postgresql,yarn
hub,openssl ,readline
- On a UNIX computer, how do you find the process id of a running process?
ps aux | grep -i “name of your desired program”
- In a terminal, what does control-c do?
kill your process thats running
- In a terminal, what does control-a do?
move cursor to beginning of line
- In a terminal, what does control-e do?
move cursor to the end of line

- What keyboard shortcut do you use to split the screen in your editor?
command + \

- What keyboard shortcut do you use to split the screen in your terminal?
screen

- When a terminal command completes, how can you tell if it was successful or not?
a new line will appear
- What does your `~/.gitconfig` have in it? (paste the whole file here)
ile:/usr/local/etc/gitconfig	credential.helper=osxkeychain
file:/Users/mparks/.gitconfig	user.name=Marquis Parks
file:/Users/mparks/.gitconfig	user.email=mparks@Marquiss-MacBook-Pro.local
file:/Users/mparks/.gitconfig	core.excludesfile=/Users/mparks/.gitignore_global
file:/Users/mparks/.gitconfig	difftool.sourcetree.cmd=opendiff "$LOCAL" "$REMOTE"
file:/Users/mparks/.gitconfig	difftool.sourcetree.path=
file:/Users/mparks/.gitconfig	mergetool.sourcetree.cmd=/Applications/SourceTree.app/Contents/Resources/opendiff-w.sh "$LOCAL" "$REMOTE" -ancestor "$BASE" -merge "$MERGED"
file:/Users/mparks/.gitconfig	mergetool.sourcetree.trustexitcode=true
➜  ~
- What is the difference between a relative and absolute path?
The path with reference to root directory is called absolute. The path with reference to current directory is called relative.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?
  cd.. ~/Desktop/sass/css


- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
  ⌃⇧Tab
- What files or folders do you want all git repositories to ignore?
 Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

 Runtime data
pids
*.pid
*.seed
*.pid.lock

 Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

 Coverage directory used by tools like istanbul
coverage

 nyc test coverage
.nyc_output

 Grunt intermediate storage (http://gruntjs.com/creating-pluginsstoring-task-files)
.grunt

 Bower dependency directory (https://bower.io/)
bower_components

 node-waf configuration
.lock-wscript

 Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

 Dependency directories
node_modules/
jspm_packages/

 Typescript v1 declaration files
typings/

 Optional npm cache directory
.npm

 Optional eslint cache
.eslintcache

 Optional REPL history
.node_repl_history

 Output of 'npm pack'
*.tgz

 Yarn Integrity file
.yarn-integrity

 dotenv environment variables file
.env


- What is the main difference between `==` and `===` in JavaScript?

the '==' only checks for equal value while the '===" checks for  value  but also for 
type

 Requirements

- [ ] __50:__ All questions are answered correctly.