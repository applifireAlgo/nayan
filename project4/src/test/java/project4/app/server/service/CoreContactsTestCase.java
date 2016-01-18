package project4.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import project4.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import project4.app.server.repository.CoreContactsRepository;
import project4.app.shared.contacts.CoreContacts;
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
import project4.app.shared.contacts.Gender;
import project4.app.server.repository.GenderRepository;
import project4.app.shared.location.Language;
import project4.app.server.repository.LanguageRepository;
import project4.app.shared.location.Timezone;
import project4.app.server.repository.TimezoneRepository;
import project4.app.shared.contacts.Title;
import project4.app.server.repository.TitleRepository;
import project4.app.shared.contacts.CommunicationData;
import project4.app.shared.contacts.CommunicationGroup;
import project4.app.server.repository.CommunicationGroupRepository;
import project4.app.shared.contacts.CommunicationType;
import project4.app.server.repository.CommunicationTypeRepository;
import project4.app.shared.location.Address;
import project4.app.server.repository.AddressRepository;
import project4.app.shared.location.AddressType;
import project4.app.server.repository.AddressTypeRepository;
import project4.app.shared.location.City;
import project4.app.server.repository.CityRepository;
import project4.app.shared.location.Country;
import project4.app.server.repository.CountryRepository;
import project4.app.shared.location.State;
import project4.app.server.repository.StateRepository;

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
            gender.setGender("UFcF80iGxKjmqjlQbiX23PEXvLYTO61lqm081cpvkD9dkvKaab");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("xy");
            language.setAlpha3("eWs");
            language.setAlpha4("7OG5");
            language.setAlpha4parentid(11);
            language.setLanguage("ADK4DZ1bKjOiud9rILxu9ySgGLknCPpirKUQfS7GFP6s6VEg5V");
            language.setLanguageDescription("mpYtGA8qMQ2swnM8aEh2qo3AbhFCuAAktLgUhJoUGVDsXYNtDS");
            language.setLanguageIcon("ZWFoTSnovdSKGJI5loquZi27hcVdBi2r1cNEUj58EP4P5WEaGB");
            language.setLanguageType("IXVYiG4tOFpYfNVk1FFtEqP85RUyrX3N");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("ee0HRU7hgcKDrek8ivOlG81NWXieBcN2Jxvk0LmCeaOt12zI5u");
            timezone.setCountry("e9I41LUUlKv5Hk31Ns3lGcIOslqPPk1cfkVVnaRUXHaDunw0p8");
            timezone.setGmtLabel("lxaw1ydLU7Le0eEFf7bxHxtAIu7xwV6xkwk6u9kwXeNALOXjVz");
            timezone.setTimeZoneLabel("UKKPjgnl9E4TdCZyCdbGaFnhRJ7Hd1jv6oHGfc9wxyeEmU1nig");
            timezone.setUtcdifference(2);
            Title title = new Title();
            title.setTitles("frFbHloTPQDs5MZxPeNXrdluzduLekcZsskONiwB2XhJxwMMq2");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(42);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("KIjR2IUvcVbdW3BjqrmVeVGpIjpkc3F0SbLsVV6cLpW0I7w7Uc");
            corecontacts.setFirstName("3XxjfESAbYQ5zGQ35uvpUcMN9LfvYfrAQwmL4j1wwblZWBqg1V");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("VyVs8YKi7JbAYXFLRw2o5VIrQ5ixas5dLoaI0VcKTkNOwPUzuV");
            corecontacts.setMiddleName("dI7UBrKqnnpWbK59dtLM7Q6aSln3KhEcjA5EpYfxwNinv3ZGvr");
            corecontacts.setNativeFirstName("d2fCEw6Ws46YZrihXGirLvMNRzU7MtBhSFpoULO0S0BI5lHB2q");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("P5go2VOVMyfZBPwmW0izPLW0Djy5IP6TDrTV5k21rXjRCz2j2l");
            corecontacts.setNativeMiddleName("6tzIGsdhiEs7H1iJJGr6WStIhx7kxmti8yoUuZrLzCdVMatVMk");
            corecontacts.setNativeTitle("sOw9BIoezeebMxBDIgVdnxztmDJK13U9F7SVYLru0SSmdq2Iga");
            corecontacts.setPhoneNumber("qEEe9vqSr7dthnvQYJMZ");
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("2");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("J1jtxGm04P5RE0yGrGXbShO0tJ13sKClb9jPzERFC3wW1OhKNF");
            communicationgroup.setCommGroupName("qRcs1rfOBFAVzRevOduKbrrpRiFOiJjafSaW9FEVIAMYUyp55i");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("WOKCpgeRJ5GgUYWA4wIvKNm0BXmhkiHEajQ3Hrv87c1eeBIUGp");
            communicationtype.setCommTypeName("iNv7gxOXwCe8ssoj6xFNUjKzuBJLDg4IptFLsTnTjmvfmaEi6n");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("y");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("Yxkv3GCjdoLbdFe0g9wWLNDkDqXgSlMZWuFWfuOPizOlVGNXJv");
            address.setAddress2("46JND9ZAGQYx5nsZbLDGeVoxtsBsOXQSGnOqSUThPmVSKkHYzI");
            address.setAddress3("lqgIUSra2C8CJhBZ7Tosav6UPFtZPgXIMFMqwpf9ZvgpGiKWtU");
            address.setAddressLabel("2CTUOAVFvBG");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("Qm6ENLc4iQTQIupdB5Q5DPdhn4PXz1AcHrx5ZrI5frAYPX6ZFP");
            addresstype.setAddressTypeDesc("7c6Zxh9lKWEcDzISPmW3gNH6iBiMCWhEMITJT0AbXKkP1rAlmB");
            addresstype.setAddressTypeIcon("5A61FXtZfAw1rfTNaPfMvHscvLAMPmHI0OvHBRhdY3wwHQOZby");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(3);
            city.setCityCodeChar2("Ey02Gk4BKwBZuoiPEhPkLquF70ITiSgz");
            city.setCityDescription("PRBsvOu5I2rwAO42RSLll6PDtP6qV6wR1nUoWocZ9KVbW4NKC0");
            city.setCityFlag("t4U5lB1BDpHj3RVgPVim2qFvmEe37OCuk3y60RCne01OzmHV11");
            city.setCityLatitude(9);
            city.setCityLongitude(8);
            city.setCityName("X4fER44bdVH6FcOsRQiEegRVCiBDyzVwOpwHzd1UkIFvRaT3pf");
            Country country = new Country();
            country.setCapital("tzvDSbSsGQIKoqdAlS9NtTsGzVEu1do5");
            country.setCapitalLatitude(7);
            country.setCapitalLongitude(4);
            country.setCountryCode1("j0O");
            country.setCountryCode2("TbR");
            country.setCountryFlag("ZbvIWYIklJknpCjXOZFoeDVYq0Mdnes1GI1hvNjYepjL5GMZM6");
            country.setCountryName("7BieupoMdNC5UATw9grMVpogXwQ3gbHqo1gg52MvWrrlN60joY");
            country.setCurrencyCode("NuA");
            country.setCurrencyName("ErAL8HAZw2hiCNZKjWZ01WZjFK8RA2MwnyTbJHHtv84gJu6Cbh");
            country.setCurrencySymbol("YQ96DUhVcRG4aSsZvSwgKGUmlXDsabTJ");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("yrQMMwzmLCiWChNompV9MwhT2xsEIMlCjEhiONAFAthuX7ZOkt");
            state.setStateCapitalLatitude(6);
            state.setStateCapitalLongitude(11);
            state.setStateCode(2);
            state.setStateCodeChar2("9teJrgFDEItQ1r19g3M24ESJUnlLT3zF");
            state.setStateCodeChar3("XCZM9M2O8OcdnOsf6jm1ImhgksxUTPvc");
            state.setStateDescription("R2Czn2lZk1MXeQKrSRJGClhBzsXWZTW12QcE7kAHhKQBTJ2wue");
            state.setStateFlag("ZtMJ0el4WuDVOW8ioIgGB9mALFujoVYJdIRY81tkkS8hCcpSSO");
            state.setStateName("mIAYVN2V9VBQpcdmLqCnTwWfRx62jS4cVALoBsYrlgraOwMnbS");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(0);
            city.setCityCodeChar2("rstYqbwY2dQMleqMzjmS4SIw6bG1WQb2");
            city.setCityDescription("L63lsx9pmbN615qlpE69RQw1xhAXqpdhD1yqXdcQOuVPpFt49B");
            city.setCityFlag("2vSM31GJrbIqohoi1nPWVuTZh4vkjFHi5uxbsxHM260dh3DTeK");
            city.setCityLatitude(2);
            city.setCityLongitude(5);
            city.setCityName("vcMVcfrGWfjWwLTD4DNqeHzAjl1jpInI5kquupnTSdyrFnyvK3");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("gUp1ovSQudDNvzD3V0wdvkRBRN2YYh1NX0bRNfMrLeQ40nXGoZ");
            address.setAddress2("ItthMfx7aBx2V6cx8JS83SDREJLFtAuRcWjaKzq6cnE9NdcAzk");
            address.setAddress3("UDxTI4ZV2QKjM6hzUt8YYFU2Hu0Swq6MYVi797cWSEWroXp66E");
            address.setAddressLabel("K8mYoJaa9D5");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("jJyH1mGgVCaMLZcAM4W0l30rjI1aZrVNhJzOukhRaHmGXhrWKp");
            address.setLongitude("LDUbyjDhB2T2vtJjI2yfb1PVoyGtk7rILUBNV9AkSp32EChFAo");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("kOPyhR");
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
            corecontacts.setAge(94);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("3OBbLlc44ybUjAjLjqMwtm42ZoVHloFV6IIsE6w1EGw4IQ6rxf");
            corecontacts.setFirstName("dWylOz6lsGLTlBnUyLDBnMg4HvYvLhCdcCZ6GS04sHXYpoWAe8");
            corecontacts.setLastName("rkugL3RM40acxbRcjhuDzJrY26ngIq3LE1KUNqnpNTjtUDxmuM");
            corecontacts.setMiddleName("083mUghYx3LFYrOHxXLhyjwFU9zWOtPqQ2BIzRoX1Su0iSg2gn");
            corecontacts.setNativeFirstName("s4LyAwh7NnahUPQ4mHH7zC9Y8FkLKmSD2eBnwAGB57cShoCWS1");
            corecontacts.setNativeLastName("00bkupxht0qSgoHbnPAa9eLKkoPZ80CuD4JsRNsGwXoWFpKZSY");
            corecontacts.setNativeMiddleName("gk3ren1b5kM9iIQ0ZTsZ7f0Eai1LGs9PBa9CVdEBR2sjtDEQ7v");
            corecontacts.setNativeTitle("cFPdcQAXYjhE1pa0hkScEWHEQxeVhIRwwP6FjwA1ARMDnQToMl");
            corecontacts.setPhoneNumber("aJiTUJMgBy4aAtgKBoCs");
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
