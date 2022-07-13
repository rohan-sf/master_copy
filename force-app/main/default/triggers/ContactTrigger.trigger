trigger ContactTrigger on Contact (before insert) 
{
    system.debug('Test Trigger change');
}