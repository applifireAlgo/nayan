package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.CoreContactsRepository;
import com.test.app.shared.contacts.CoreContacts;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.test.app.shared.contacts.Gender;
import com.test.app.server.repository.GenderRepository;
import com.test.app.shared.location.Language;
import com.test.app.server.repository.LanguageRepository;
import com.test.app.shared.location.Timezone;
import com.test.app.server.repository.TimezoneRepository;
import com.test.app.shared.contacts.Title;
import com.test.app.server.repository.TitleRepository;
import com.test.app.shared.contacts.CommunicationData;
import com.test.app.shared.contacts.CommunicationGroup;
import com.test.app.server.repository.CommunicationGroupRepository;
import com.test.app.shared.contacts.CommunicationType;
import com.test.app.server.repository.CommunicationTypeRepository;
import com.test.app.shared.location.Address;
import com.test.app.server.repository.AddressRepository;
import com.test.app.shared.location.AddressType;
import com.test.app.server.repository.AddressTypeRepository;
import com.test.app.shared.location.City;
import com.test.app.server.repository.CityRepository;
import com.test.app.shared.location.Country;
import com.test.app.server.repository.CountryRepository;
import com.test.app.shared.location.State;
import com.test.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CoreContactsTestCase {

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            Gender gender = new Gender();
            gender.setGender("SV4t276Bn6fg5S7wJWkPdtGNDiwEyLcxanBNV1BgqNFeGomihC");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("5q");
            language.setAlpha3("6Fl");
            language.setAlpha4("naOa");
            language.setAlpha4parentid(0);
            language.setLanguage("m01R6rIP352JJv8gFDJzGcObxboazq5m6mcQycdFLQBGNM5Zg9");
            language.setLanguageDescription("GGBfdYrvSW8qj2SjuVVKayAx9HV6AQgtdLonaVDtkRLRsN8g5Y");
            language.setLanguageIcon("nzJvSrS0GtQFJ02Qq7aR5sUj7YKaiXIB4btKv0HLIOc9CEIXzH");
            language.setLanguageType("Gnvs4gTVnGWXLuOir83a4skloqD9BbgZ");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("sfQ24ozVlfwNjD7hPE2HJitx7OTisN9XxAimTCWRX2Cag4wVbI");
            timezone.setCountry("cIX1KnbKvFjLLGSBeDc6EWA8Be7YB6LRDSjXTasfVUzQqkzZ0X");
            timezone.setGmtLabel("2emwqVDdcuRDWgGrNYuEwDG7npBHcoZmCsZhNCcAo2GPg3HdWF");
            timezone.setTimeZoneLabel("W2bFtGqHk9PWLkLxqI7oho1IacuZCs6QyYtqGfQu6NfaWd2KD0");
            timezone.setUtcdifference(8);
            Title title = new Title();
            title.setTitles("P7wJUtzaASMw9CISzwt4usmuU0HjZHWIpv11geseOqhtRgndN5");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(19);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("9sLTluwBceW6PelbVicTsvnBAoDNK7Xvm4qXiOSIXHHXZHdWRN");
            corecontacts.setFirstName("JdJgwACVljgGpgCMyhthIjrnf9GV9r7oIsxP59SSPqoZVf5RaN");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("lUE1FFOVOgHbZIovvfwGdwiMfLaBixIFMwfwYlYjDSl0tHwjcx");
            corecontacts.setMiddleName("vjQAnYj6ODoAiXgnh7DiG5SQghjjIzcjQqgJ4qZDKxTLgkQ9Dq");
            corecontacts.setNativeFirstName("vilN1t3fsV93fghypbBOFOFo7hNogx9QDFgXkiqoEhwxTO2fhz");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("sWPegaAWry9aGEfyCRpdd5VVxbc9fmzTNZmywZCDqD50NP28CF");
            corecontacts.setNativeMiddleName("9QLYEl01JCTz9yjGRoRDWWu64MYWR7cToaCLOpr7YiJAhxVGOz");
            corecontacts.setNativeTitle("bskZLqeWmtjkjvtFgJNarIV9hQ9lw79YdnKrvFj1mrlJXzBkeG");
            corecontacts.setPhoneNumber("GWJNayBJ8SBs6VXwUQ7k");
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("w");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("Im550N2oDtt6cWd6iItAiCtjayMgPbjA4W4NpRyYD9l9D1D0Dt");
            communicationgroup.setCommGroupName("MXoqfEhvCFJTDTzxHXJijdYHow1ckdd3OmWJtWqxfuJobaG8Ky");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("3dd4bXOEBb9vD7iZrzr6i4YyWsJzvNqQxdkvUEWdNMtvsJzA54");
            communicationtype.setCommTypeName("dW0mohomqu9dw4rmeLQvT9w1DK2eGG6M8vRxTLDetLvy3ubAEI");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("v");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("S26d28SmepdHvRXt49m3hUdWyPAHR0jBdiN4h48GU42TpsfDVI");
            address.setAddress2("63Gf4gbTh5EeDGGvt5QP1JFwQu8cEtN4X0QxcnxOkrsuA6byl3");
            address.setAddress3("Vx1hhlv4hC9LLrYY4znyKCgbJdYst05Rdr6NaSX0Syzd54GAep");
            address.setAddressLabel("2kf4LW3QnMW");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("61vMjlTya9xOGjHe61A9HQJTlOLGkN8hO8t82RvwTAIy0VnPeC");
            addresstype.setAddressTypeDesc("8yBc6CAd2iwx9h2bWBt3oIyAcy9WXkT6Zq1FaqP6mBkdJ0CE4y");
            addresstype.setAddressTypeIcon("YXSHQ6AgxZpSPQtsgV0vqE138jCzI6IplBs86Wqr8ywjQO9dGH");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(2);
            city.setCityCodeChar2("5yuXTGG2nlmaGGJ3HZ0ogvLojsz37vVU");
            city.setCityDescription("VTM8CuzWy0aJGAbFlBnB0QwHwkf3pCDYWTwDkRu2PbKMqmzXpu");
            city.setCityFlag("04HLY58RzzaTB8oTHRCTPyq7so6cReqKN8vbb0syipJ6r0MPi4");
            city.setCityLatitude(7);
            city.setCityLongitude(5);
            city.setCityName("IVOfQzWsl6NiLiVwY6BctpWUslPTiCyhUBfZZe2VlB7kTLb2AK");
            Country country = new Country();
            country.setCapital("7Rxrzp1IDVOGVn9CxqKbzq7TTm4iLCr4");
            country.setCapitalLatitude(3);
            country.setCapitalLongitude(3);
            country.setCountryCode1("Hdt");
            country.setCountryCode2("hPV");
            country.setCountryFlag("RpZmpUz1qmv1vtohzXxYQsGkBnws8KNeeaqWSHDz6k7nBBWO6f");
            country.setCountryName("Mkt3wpdMlkcZ9PPanBxfGTmBzSBZu3rNZ89F3rZdeLaVa7VXTD");
            country.setCurrencyCode("9Vv");
            country.setCurrencyName("l3RMURpYEQo8N2Io769WXUIN4fJPb0tHg3KMiN30RJTD7FdTN1");
            country.setCurrencySymbol("p5N4Dmq5leEOWnpX7rNEwX89pbgp6wv4");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("KTstVb6eIKUE7vaSs7dEmGTGaSXKdvkypVM7gmPn1MRGyQXGsv");
            state.setStateCapitalLatitude(10);
            state.setStateCapitalLongitude(5);
            state.setStateCode(0);
            state.setStateCodeChar2("kZKRVazLV8evDwxdl29JzMLSSAxtf0N7");
            state.setStateCodeChar3("opO6Tbd5ktW6hudAgYSeXlC8LSAKVRVM");
            state.setStateDescription("EUzHEgVcKNo3y5wZUS5Qc7kOnb4mbbBDVLTNmkRkeZM1ISd2zf");
            state.setStateFlag("leI2yActgtqpXxtPYbBOiCR3SHPR4lBM4YL8EJ2icenuLJWgUh");
            state.setStateName("Fq8KliW7Ddaxi9rPq34nuToDGcYh9QkhrVGwMM8mGVHIJiq66e");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(0);
            city.setCityCodeChar2("c6SspeaUujDW3K0bKiz9sCgkiz5KScvI");
            city.setCityDescription("CCLy4vBpWlYzgbqoiY519dOl2Vwdm1w6oJdsJij097WO4PycD5");
            city.setCityFlag("eHKEfaORoyQMOkvgczGyjNgPgkV35dpZoxNqFgSeWQF4lh3hgB");
            city.setCityLatitude(11);
            city.setCityLongitude(5);
            city.setCityName("HSZm1fdFmCtRVMJnN1ZZgyj4htemmRPsDnK5mDzYrls8FM96sb");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("D8uZQnBfcSkBLOoC5dweRdlHdlSAnOAc0rQ6i67KHLoVsKZApc");
            address.setAddress2("pmMyolt0Kh8fQvbLDjFhjerDpOSjdehowudc0sfr9iKfg1qW0u");
            address.setAddress3("DbPlZt0IMnxK5K0zUr3ysl2dPSVhQZb4pCxvMLuNZX5KdIGxPF");
            address.setAddressLabel("LCODyKLo0l8");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("90zkleXgB0Uzt20CDAvFVyBKE0vt5DzGpOzJMj5xNaFNXgHXQA");
            address.setLongitude("KC0LYIDno9YAsIHJwXhv16bTQhoXOvCyvdjqyClzMRZyc2VA38");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("nObGzH");
            listOfAddress.add(address);
            corecontacts.addAllAddress(listOfAddress);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.setEntityValidator(entityValidator);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private CommunicationGroupRepository<CommunicationGroup> communicationgroupRepository;

    @Autowired
    private CommunicationTypeRepository<CommunicationType> communicationtypeRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setAge(78);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("lel0xz1NNCjcSvri0SOfPXNh6itvyb3BGSTfIXeVXJ3t8RoJgA");
            corecontacts.setFirstName("ohXscWGkPvhTOZdZwFVoFeRQ3iM9ikIzXA3TI7JsQjMhgV5tVa");
            corecontacts.setLastName("aL30r84GdGV92Dq5UnlYZ60XXUnL3qPz0C1VfmOAWGwYYiBU6z");
            corecontacts.setMiddleName("I9z2joDDMx8mmZtgJKmDtb6MqduHWcZ2EfuDXNtB5ozSZ26WQn");
            corecontacts.setNativeFirstName("5Ad4RDofM98m6sbMINRv3qf8VXA9eWKyi6CzfXPW85vPmvXiNk");
            corecontacts.setNativeLastName("PBMQXjmbe23ZNNXOCLx1hmslEnaZ5tgNePCiGjfk5xEKochrNh");
            corecontacts.setNativeMiddleName("8wE18VEzg5X7tSaswLeCsyKy22c6j5dWKQn9SZVR2jTNYrNQXM");
            corecontacts.setNativeTitle("Pgd8b9Z9ShZm6f78uuZdhbftKR0DEtvwYT5M0PvA3Grj0SfhcJ");
            corecontacts.setPhoneNumber("Hv4Y2WSzAe7uYvqq8eT8");
            corecontacts.setVersionId(1);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
            communicationtypeRepository.delete((java.lang.String) map.get("CommunicationTypePrimaryKey")); /* Deleting refrenced data */
            communicationgroupRepository.delete((java.lang.String) map.get("CommunicationGroupPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
