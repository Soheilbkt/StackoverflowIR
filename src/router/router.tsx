
import Page_404 from '../pages/404Page';
import { CommentPage } from '../pages/CommentPage';
import { LayoutHome } from '../pages/LayoutHome';

export const route = [
  { path: '/', element: <LayoutHome /> },
  {path:'*' , element: <Page_404/>},
  { path: 'feedback-page/:idpost', element: <CommentPage /> }
];
