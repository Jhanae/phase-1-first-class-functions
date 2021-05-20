function receivesAFunction(spy)
{
    spy()
}
function returnsANamedFunction()
{
    const fn = () => 'random'
    return fn
}
function returnsAnAnonymousFunction()
{
    return () => 'i'
}