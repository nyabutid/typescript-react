/// <reference path="../typings/browser.d.ts" />
/// <reference path="./interfaces.d.ts"/>

namespace app.components {

    export class TodoFooter extends React.Component<ITodoFooterProps, {}> {

        public render() {
            var activeTodoWord = app.miscelanious.Utils.pluralize(this.props.count, 'item');
            var clearButton = null;

            if (this.props.completedCount > 0) {
                clearButton = (
                    <button
                        className="clear-completed"
                        onClick={this.props.onClearCompleted}>
                        Clear completed
                    </button>
                );
            }

            var nowShowing = this.props.nowShowing;
            return (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{this.props.count}</strong> {activeTodoWord} left
                    </span>
                    <ul className="filters">
                        <li>
                            <a
                                href="#/"
                                className={classNames({ selected: nowShowing === app.constants.ALL_TODOS }) }>
                                All
                            </a>
                        </li>
                        {' '}
                        <li>
                            <a
                                href="#/active"
                                className={classNames({ selected: nowShowing === app.constants.ACTIVE_TODOS }) }>
                                Active
                            </a>
                        </li>
                        {' '}
                        <li>
                            <a
                                href="#/completed"
                                className={classNames({ selected: nowShowing === app.constants.COMPLETED_TODOS }) }>
                                Completed
                            </a>
                        </li>
                    </ul>
                    {clearButton}
                </footer>
            );
        }
    }

}