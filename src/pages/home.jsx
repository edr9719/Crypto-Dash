import CoinCard from '../components/CoinCard';
import LimitSelector from '../components/LimitSelector';
import FilterInput from '../components/FilterInput';
import SortSelector from '../components/SortSelector';
import Spinner from '../components/Spinner';

const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLocaleLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
        case 'market_cap_asc':
          return a.market_cap - b.market_cap;
        case 'price_desc':
          return b.current_price - a.current_price;
        case 'price_asc':
          return a.current_price - b.current_price;
        case 'change_desc':
          return (
            b.price_change_percentage_24hr - a.b.price_change_percentage_24hr
          );
        case 'change_desc':
          return (
            b.price_change_percentage_24hr - a.price_change_percentage_24hr
          );
        case 'change_asc':
          return (
            a.price_change_percentage_24hr - b.price_change_percentage_24hr
          );
      }
    });

  return (
    <div>
      <h1>
        <img
          src='/favicon.ico'
          alt='Crypto Dash Icon'
          style={{ width: '24px', height: '24px', marginRight: '8px' }}
        />
        Crypto Dash
      </h1>
      {loading && <Spinner color='white' />}
      {error && <div className='error'>{error}</div>}

      <div className='top-controls'>
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!loading && !error && (
        <main className='grid'>
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No Matches</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
