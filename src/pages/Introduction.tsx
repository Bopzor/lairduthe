import React from 'react';
import { RouteComponentProps } from '@reach/router';

import PageLayout from '../components/PageLayout';

const Introduction: React.FC<RouteComponentProps> = () => (
  <PageLayout page="intro">
    <div>Introduction</div>
  </PageLayout>
);

export default Introduction;
