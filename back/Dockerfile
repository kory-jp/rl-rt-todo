FROM ruby:3.0.0 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential nodejs yarn
RUN mkdir /rl-rt-todo
WORKDIR /rl-rt-todo
COPY Gemfile /rl-rt-todo/Gemfile
COPY Gemfile.lock /rl-rt-todo/Gemfile.lock
RUN bundle install
COPY . /rl-rt-todo

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

CMD ["rails", "server", "-b", "0.0.0.0"]