import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import { TemplateProvider } from "./helpers/context-api";
import { getTemplate } from "./helpers/storage";

import Topic from "./Template";

import {
  Button,
  Heading,
  MainWrapper,
  TemplateCard,
  HeadingWrapper,
  TemplatesWrapper
} from "./styles";

function Home({ match }) {
  const [templateState, addTemplateState] = useState(null);
  const [loadingStore, setLoadingStore] = useState(false);

  useEffect(() => {
    setLoadingStore(true);
    async function setData() {
      const template = await getTemplate();
      if (template) {
        addTemplateState(template);
      }
    }
    setData();
    setLoadingStore(false);
  }, []);

  console.log(templateState, loadingStore);

  if (!templateState || isEmpty(templateState)) return null;
  return (
    <TemplateProvider
      value={{
        templateState
      }}
    >
      <MainWrapper>
        <HeadingWrapper>
          <Heading>Templates</Heading>
          <Link to="new">
            <Button primary={true}>New Template</Button>
          </Link>
        </HeadingWrapper>
        {templateState && (
          <TemplatesWrapper>
            {templateState.map((item, id) => (
              <TemplateCard key={id}>
                {item.name}
                <Link
                  to={{
                    pathname: `edit/${item._id}`,
                    state: item
                  }}
                >
                  <Button>Edit</Button>
                </Link>
              </TemplateCard>
            ))}
          </TemplatesWrapper>
        )}
      </MainWrapper>

      <Route path={`/new`} component={Topic} />
      <Route path={`${match.path}/:id`} component={Topic} />
    </TemplateProvider>
  );
}

export default Home;
