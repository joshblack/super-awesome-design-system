/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router';
import { Header } from '../../../components/Header';
import { SkipToContent } from '../../../components/Main';
import { ComponentDocs } from '../../../components/ComponentDocs';

export default function ComponentPage() {
  const router = useRouter();
  const { component } = router.query;

  if (!component) {
    return null;
  }

  return (
    <>
      <SkipToContent />
      <Header />
      <ComponentDocs component={component} />
    </>
  );
}
