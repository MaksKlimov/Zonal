import PropTypes from 'prop-types';

import useLists from 'pages/todo/hooks/useLists';
import useActiveLists from 'pages/todo/hooks/useActiveList';

import Button from 'common/components/UI/Button';
import AddNewList from './AddListField';

import styles from './Lists.module.scss';

const Lists = ({ className }) => {
  const classNames = `${styles.Lists} ${className}`;

  const [lists, , deleteList] = useLists();
  const [activeList, changeActiveList] = useActiveLists();

  const labelList = lists.map((list) => (
    <Button
      key={list.id}
      item
      noResponse
      onClick={() => changeActiveList(list.id)}
      value={list.name}
      active={activeList === list.id}
      onDelete={() => list.id !== 0 && deleteList(list.id)}
    />
  ));

  return (
    <div className={classNames}>
      <AddNewList className={styles.header} />
      <div className={styles.lists}>
        {labelList}
      </div>
    </div>
  );
};

export default Lists;

Lists.propTypes = {
  className: PropTypes.string,
};

Lists.defaultProps = {
  className: '',
};
