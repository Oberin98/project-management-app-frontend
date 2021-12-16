import { MainLayout } from '~layouts/MainLayout';
import { BoardSidebar, BoardHeader, BoardContent } from '~views/BoardView';

const BoardPage: NextPageWithLayout = () => {
	return (
		<>
			<BoardSidebar />
			<BoardHeader />
			<BoardContent />
		</>
	);
};

BoardPage.Layout = MainLayout;

export default BoardPage;
